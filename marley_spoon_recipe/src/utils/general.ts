const replaceSpaceWithHyphen = (str: string): string => {
    return str.replace(/\s+/g, '-').toLowerCase();
};

const setSysId = (sys_id: string): void => {
    localStorage.setItem('sys_id', sys_id);
}

export { replaceSpaceWithHyphen, setSysId };