export const HEADER_TEXT = {
    title: 'McCarren Word Add In for Redaction',
    subtitle: 'Redact sensitive info + add header + track changes.',
    trackingApi: {
        label: 'Tracking API:',
        available: 'WordApi 1.5+',
        unavailable: 'Not available'
    }
};

export const REDACT_VIEW_TEXT = {
    button: {
        idle: 'Redact & Mark Confidential',
        running: 'Working...'
    },
    status: {
        idle: 'Ready.',
        running: 'Redacting + adding header...',
        success: (headerAdded: boolean, redactions: number) =>
            `Done. Header: ${headerAdded ? 'added' : 'already present'} | Redactions: ${redactions}`,
        error: (message?: string) => message ?? 'Something failed.'
    }
};

export const FOOTER_TEXT = {
    tip: 'Tip: open the provided DOCX and click the button. We replace sensitive/confidential info with "REDACTED".'
};

export const REDACTION_TEXT = {
    header: 'CONFIDENTIAL DOCUMENT',
    replacement: 'REDACTED'
};