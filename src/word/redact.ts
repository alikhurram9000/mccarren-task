import { patterns, simplePatterns, complexPatterns } from '../utils/patterns';
import { REDACTION_TEXT } from '../utils/constants';
import { uniqueMatches } from '../utils/textMatching';
import { enableTrackingIfAvailable, addConfidentialHeader } from '../utils/wordApi';
import { redactMatches } from '../utils/redaction';

export const runRedaction = async (): Promise<{ headerAdded: boolean; redactions: number }> => {
  return Word.run(async (context) => {
    await enableTrackingIfAvailable(context);

    const headerAdded = await addConfidentialHeader(context, REDACTION_TEXT.header);

    const body = context.document.body;
    body.load("text");
    await context.sync();

    const text = body.text || "";
    let redactions = 0;

    // Patterns that work well with direct search (no special characters)
    for (const key of simplePatterns) {
      const matches = uniqueMatches(text, patterns[key]);
      redactions += await redactMatches(context, body, matches, REDACTION_TEXT.replacement, false);
    }

    // Patterns that need fallback (contain special characters like parentheses, hyphens)
    for (const key of complexPatterns) {
      const matches = uniqueMatches(text, patterns[key]);
      redactions += await redactMatches(context, body, matches, REDACTION_TEXT.replacement, true);
    }

    await context.sync();
    return { headerAdded, redactions };
  });
};