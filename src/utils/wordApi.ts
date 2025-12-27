export const isWordApi15Available = (): boolean => {
    try {
        return Office.context.requirements.isSetSupported("WordApi", "1.5");
    } catch {
        return false;
    }
};

export const enableTrackingIfAvailable = async (context: Word.RequestContext) => {
    if (!isWordApi15Available()) return;
    context.document.changeTrackingMode = Word.ChangeTrackingMode.trackAll;
};

export const addConfidentialHeader = async (
    context: Word.RequestContext,
    headerText: string
): Promise<boolean> => {
    const headerBody = context.document.sections.getFirst().getHeader(Word.HeaderFooterType.primary);
    headerBody.load("text");
    await context.sync();

    if ((headerBody.text || "").includes(headerText)) return false;

    headerBody.insertText(headerText + "\n", Word.InsertLocation.start);
    return true;
};