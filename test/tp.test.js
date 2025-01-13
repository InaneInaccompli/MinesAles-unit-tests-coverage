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
            const value = TP.my_display_unicode_t([54, 65, 73, 74]);
            console.log(value);
        })
    })
});