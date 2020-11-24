import { edad } from "./edad";

describe('Unit Test edad - Hombre', () => {

    it('Recibe edad 9 = niño', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = edad(9);

        // Assert
        expect(result).toBe('niño');
    })

    it(' Recibe edad 10 = adolecente', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = edad(10);

        // Assert
        expect(result).toBe('adolescente');
    })

    it('Recibe valEdad 16 = adolescente', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = edad(16);

        // Assert
        expect(result).toBe('adolescente');
    })

    it('Recibe valEdad 32 = adulto', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = edad(32);

        // Assert
        expect(result).toBe('adulto');
    })

    it('Recibe valEdad 9 = niño', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = edad(9);

        // Assert
        expect(result).toBe('niño');
    })
}) 