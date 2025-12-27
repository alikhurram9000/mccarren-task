export const uniqueMatches = (text: string, re: RegExp): string[] => {
    const out = new Set<string>();
    let m: RegExpExecArray | null;
    re.lastIndex = 0;
    while ((m = re.exec(text)) !== null) {
        // For partial SSN, extract the capture group if it exists
        out.add(m[1] || m[0]);
    }
    return [...out];
};

export const escapeRegex = (str: string): string => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};