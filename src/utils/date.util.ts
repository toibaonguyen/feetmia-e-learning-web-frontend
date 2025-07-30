

const LOCALE= 'en-US';
const ONE_DAY_MS = 1000 * 60 * 60 * 24;
const ONE_HOUR_MS = 1000 * 60 * 60;
const ONE_MINUTE_MS = 1000 * 60;

const JUST_NOW_TEXT = 'Just now';
const YESTERDAY_TEXT = 'Yesterday';
const MINUTE_AGO_TEXT = 'minute ago';
const MINUTES_AGO_TEXT = 'minutes ago';
const HOUR_AGO_TEXT = 'hour ago';
const HOURS_AGO_TEXT = 'hours ago';

export function formatDate(date: Date): string {
    return date.toLocaleDateString(LOCALE, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
}

export function formatTime(date: Date): string {
    return date.toLocaleTimeString(LOCALE, {
        hour: '2-digit',
        minute: '2-digit',
    });
}

export function formatDateTime(date: Date): string {
    const diffMs = Date.now() - date.getTime();
    const diffDays = Math.floor(diffMs / (ONE_DAY_MS));
    if (diffDays < 1) {
        if (diffMs < ONE_MINUTE_MS) {
            return JUST_NOW_TEXT;
        }
        if (diffMs < ONE_HOUR_MS) {
            const minutes = Math.floor(diffMs / ONE_MINUTE_MS);
            return `${minutes} ${minutes === 1 ? MINUTE_AGO_TEXT : MINUTES_AGO_TEXT}`;
        }
        if (diffMs < ONE_DAY_MS) {
            const hours = Math.floor(diffMs / ONE_HOUR_MS);
            return `${hours} ${hours === 1 ? HOUR_AGO_TEXT : HOURS_AGO_TEXT}`;
        }
    }
    if (diffDays < 2) {
        return YESTERDAY_TEXT;
    }

    return `${formatDate(date)} ${formatTime(date)}`;
}