import { escapeRegex } from './textMatching';

export const redactMatches = async (
    context: Word.RequestContext,
    body: Word.Body,
    matches: string[],
    redactionText: string,
    useFallback: boolean = false
): Promise<number> => {
    let redactions = 0;

    for (const match of matches) {
        const results = body.search(match, { matchCase: false, matchWholeWord: false });
        results.load("items");
        await context.sync();

        if (results.items.length > 0) {
            // Direct search found matches
            for (const r of results.items) {
                r.insertText(redactionText, Word.InsertLocation.replace);
                redactions++;
            }
        } else if (useFallback) {
            // Fallback: search in paragraphs for patterns with special characters
            const paragraphs = body.paragraphs;
            paragraphs.load("items");
            await context.sync();

            for (const para of paragraphs.items) {
                para.load("text");
                await context.sync();

                if (para.text.includes(match)) {
                    const escapedMatch = escapeRegex(match);
                    const newText = para.text.replace(new RegExp(escapedMatch, 'g'), redactionText);
                    para.insertText(newText, Word.InsertLocation.replace);
                    await context.sync();
                    redactions++;
                }
            }
        }
    }

    return redactions;
};