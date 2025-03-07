const useDarMode = () => {
    const [enable, setEnable] = UseLocalStorage ('dark-theme');
    const isEnabled = typeof enabledState === 'undefined' && enabled;

    useEffect (() => {
        const calssName = 'dark';
        const bodyClass = window.document.body.classList;

        isEnabled ? bodyClass.add(className) : bodyClass.remove(className); 
    }, [enabled, setEnabled]);

    return [enabled, setEnabled];
};

export default useDarMode;