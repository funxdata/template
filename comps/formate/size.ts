export const formatfileSize = (val: number): string => {
    const KB = 1024;
    const MB = KB * 1024;
    const GB = MB * 1024;

    if (val >= GB || val / MB > 100) {
        return (val / GB).toFixed(2) + 'G';
    } else if (val >= MB) {
        return (val / MB).toFixed(2) + 'M';
    } else if (val >= 100 * KB) {
        return (val / MB).toFixed(2) + 'M';
    } else if (val >= KB) {
        return (val / KB).toFixed(2) + 'K';
    } else {
        return val + 'B';
    }
};

