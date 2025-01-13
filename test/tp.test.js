import * as TP from "../src/tp"

describe('Tests TP', () => {
    describe('sum', () => {
        it('Should return 0', () => {
            const value = TP.sum('ah', 6);
            expect(value).toBe(0);
        });

        it('Should return correct value', () => {
            const value = TP.sum(5, 6);
            expect(value).toBe(11);
        });
    });

    describe('my_size_alpha_t', () => {
        it('Should return 0', () => {
            const value = TP.my_size_alpha_t(6);
            expect(value).toBe(0);
        });

        it('Should return correct value', () => {
            const value = TP.my_size_alpha_t('Test');
            expect(value).toBe(4);
        });

        it('should return 0 if no argument is passed (default value)', () => {
            const value = TP.my_size_alpha_t();
            expect(value).toBe(0);
          });
    });

    describe('my_array_alpha_t', () => {
        it('my_array_alpha_t', () => {
            const value = TP.my_array_alpha_t('Test');
            expect(value[0]).toBe('T');
            expect(value[1]).toBe('e');
            expect(value[2]).toBe('s');
            expect(value[3]).toBe('t');
        });
    });

    describe('my_is_posi_neg_t', () => {
        it('should return \'NEGATIVE\'', () => {
            const value = TP.my_is_posi_neg_t(-1);
            const value_2 = TP.my_is_posi_neg_t(0);
            expect(value).toBe(value_2);
            expect(value).toBe('NEGATIVE');
        });
        it('should return \'POSITIF\'', () => {
            const value = TP.my_is_posi_neg_t(1);
            expect(value).toBe('POSITIF');
        });
    });

    describe('fibo', () => {
        it('should return 0', () => {
            const value = TP.fibo(0);
            expect(value).toBe(0);
        });
        it('should return 1', () => {
            const value = TP.fibo(1);
            const value_2 = TP.fibo(2);
            expect(value).toBe(value_2);
            expect(value).toBe(1);
        });
        it('should return correct value', () => {
            const value = TP.fibo(3);
            expect(value).toBe(2);
        });
    });

    describe('my_display_alpha_reverse_t', () => {
        it('should return \'tseT\'', () => {
            const value = TP.my_display_alpha_reverse_t();
            expect(value).toBe('zyxwvutsrqponmlkjihgfedcba');
        });
    });

    describe('my_length_array_t', () => {
        it('Should return char', () => {
            const value = TP.my_length_array_t('Test');
            expect(value).toBe(4);
        });
    });
    
    describe('my_display_unicode_t', () => {
        it('should return \'Test\'', () => {
            const value = TP.my_display_unicode_t([84, 101, 115, 116, 51, 32]);
            expect(value).toBe('Test3 ');
        });
    });

    describe('quickSort', () => {
        it('should return something', () => {
            const value = TP.quickSort([1, 2, 3, 50, 10, 22])
            expect(value).toStrictEqual([1, 2, 3, 10, 22, 50]);
        });
    });

    describe('tspBrutForce', () => {
        it('should return the shortest path and its distance', () => {
            const distances = {
                A: { A: 0, B: 10, C: 15, D: 20 },
                B: { A: 10, B: 0, C: 35, D: 25 },
                C: { A: 15, B: 35, C: 0, D: 30 },
                D: { A: 20, B: 25, C: 30, D: 0 },
            };
    
            const value = TP.tspBrutForce(distances);
    
            expect(value.minDistance).toBe(80); // A -> B -> D -> C -> A
            expect(value.meilleurePermutation).toEqual(["A", "B", "D", "C"]);
        });
    });
    
    describe('permuter', () => {
        it('should return all permutations of an array', () => {
            const input = ["A", "B", "C"];
            const expectedOutput = [
                ["A", "B", "C"],
                ["A", "C", "B"],
                ["B", "A", "C"],
                ["B", "C", "A"],
                ["C", "A", "B"],
                ["C", "B", "A"],
            ];
    
            const value = TP.permuter(input);
    
            expect(value).toEqual(expect.arrayContaining(expectedOutput));
            expect(value).toHaveLength(6);
        });
    });
    
    describe('resoudreSudoku', () => {
        it('should solve a valid Sudoku puzzle', () => {
            const grille = [
                [5, 3, 0, 0, 7, 0, 0, 0, 0],
                [6, 0, 0, 1, 9, 5, 0, 0, 0],
                [0, 9, 8, 0, 0, 0, 0, 6, 0],
                [8, 0, 0, 0, 6, 0, 0, 0, 3],
                [4, 0, 0, 8, 0, 3, 0, 0, 1],
                [7, 0, 0, 0, 2, 0, 0, 0, 6],
                [0, 6, 0, 0, 0, 0, 2, 8, 0],
                [0, 0, 0, 4, 1, 9, 0, 0, 5],
                [0, 0, 0, 0, 8, 0, 0, 7, 9],
            ];
    
            const value = TP.resoudreSudoku(grille);
    
            expect(value).toBe(true);
            expect(grille).toEqual([
                [5, 3, 4, 6, 7, 8, 9, 1, 2],
                [6, 7, 2, 1, 9, 5, 3, 4, 8],
                [1, 9, 8, 3, 4, 2, 5, 6, 7],
                [8, 5, 9, 7, 6, 1, 4, 2, 3],
                [4, 2, 6, 8, 5, 3, 7, 9, 1],
                [7, 1, 3, 9, 2, 4, 8, 5, 6],
                [9, 6, 1, 5, 3, 7, 2, 8, 4],
                [2, 8, 7, 4, 1, 9, 6, 3, 5],
                [3, 4, 5, 2, 8, 6, 1, 7, 9],
            ]);
        });
    });
    
    describe('estValide', () => {
        it('should validate a number placement in the Sudoku grid', () => {
            const grille = [
                [5, 3, 0, 0, 7, 0, 0, 0, 0],
                [6, 0, 0, 1, 9, 5, 0, 0, 0],
                [0, 9, 8, 0, 0, 0, 0, 6, 0],
                [8, 0, 0, 0, 6, 0, 0, 0, 3],
                [4, 0, 0, 8, 0, 3, 0, 0, 1],
                [7, 0, 0, 0, 2, 0, 0, 0, 6],
                [0, 6, 0, 0, 0, 0, 2, 8, 0],
                [0, 0, 0, 4, 1, 9, 0, 0, 5],
                [0, 0, 0, 0, 8, 0, 0, 7, 9],
            ];
    
            const value = TP.estValide(grille, 0, 2, 4);
            const value_2 = TP.estValide(grille, 0, 2, 3);

            expect(value).toBe(true); // Valid placement
            expect(value_2).toBe(false); // Invalid placement
        });
    });
});