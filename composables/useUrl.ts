export const useUrl = (name: string): string => {
    if (name === 'factions' || name === 'systems') {
        return `https://api.spacetraders.io/v2/${name}`;
    } else {
        return `https://api.spacetraders.io/v2/my/${name}`;
    }
};
