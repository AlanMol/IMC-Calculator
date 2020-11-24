import {rango} from "./rango";


describe('unit Test Rango de Peso', () => {

    it('Recibe información rango 16 =peso bajo  ', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = rango(16);

        // Assert
        expect(result).toBe('peso bajo');
    })

    it('Recibe información rango 18 = peso bajo', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = rango(18);

        // Assert
        expect(result).toBe('peso bajo');
    })

    it('Recibe información rango 32.4 = obesidad 1 ', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = rango(32.4);

        // Assert
        expect(result).toBe('obesidad 1');
    })

    it('Recibe información rango 35 = obesidad 2 ', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = rango(35);

        // Assert
        expect(result).toBe('obesidad 2');
    })

    it('Recibe información rango 43 = obesidad 3', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = rango(43);

    })

})     