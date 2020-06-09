export function keep<T>(targetObject: Record<string, T>, keysToKeep: string[]): Record<string, T> {
    const filterPropsHandler = {
        ownKeys: (keyObjectList: Record<string, any>) =>
            keysToKeep.filter(item => keyObjectList[item])
    };
    const auxProxy = new Proxy(targetObject, filterPropsHandler);
    return {...auxProxy};
}

export function exclude<T>(targetObject: Record<string, T>, keysToExclude: string[]): Record<string, T> {
    const filterPropsHandler = {
        ownKeys: (keyObjectList: Record<string, any>) =>
            Object.keys(keyObjectList).filter(
                item => !keysToExclude.includes(item)
            )
    };
    const auxProxy = new Proxy(targetObject, filterPropsHandler);
    return {...auxProxy};
}
