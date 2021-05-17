/**
 * 检查是否为有效并且正确的组件
 */
export default function validComps(target: Element, compName: string): void {
    const r = '[Rabbit] Error: ';

    if (!target) {
        throw new Error(
            `The target element you selected for configuration does not exist -- > '${target}'. This error occurred in the ${compName} component`
        );
    }

    const targetName = target.tagName.toLowerCase().replace(/r-/, '');

    if (targetName !== compName) {
        throw (new Error().message = `${r}The configured component was selected incorrectly, it is not a ${compName} component --> "${targetName}"`);
    }
}
