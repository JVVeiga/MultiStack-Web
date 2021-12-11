export const ValidationService = {
    zipCode(zipCode = ''): boolean {
        return zipCode.replace(/\D/g, '').length === 8;
    }
}