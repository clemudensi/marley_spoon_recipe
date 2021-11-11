const replaceSpaceWithHyphen = (str: string): string => {
    return str.replace(/\s+/g, '-').toLowerCase();
};

export { replaceSpaceWithHyphen };