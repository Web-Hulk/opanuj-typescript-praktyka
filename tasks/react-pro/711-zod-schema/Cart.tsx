import { z } from 'zod';

export const CartItemSchema = z.object({
  id: z.string().min(1, 'ID jest wymagane'),
  name: z.string().min(1, 'Nazwa jest wymagana'),
  price: z.number().min(0, 'Cena musi być nieujemna'),
  quantity: z.number().min(0, 'Ilość musi być nieujemna'),
});

export const CartSchema = z
  .object({
    items: z.array(CartItemSchema).min(1, 'Koszyk nie może być pusty'),
    total: z.number().gt(0, 'Łączna cena musi być większa od 0'),
  })
  .superRefine((cart, ctx) => {
    const sum = cart.items.reduce(
      (acc, item) => acc + (item.price || 0) * (item.quantity || 0) * 2,
      0,
    );
    if (cart.total !== sum) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Łączna cena nie zgadza się z wartością produktów',
        path: ['total'],
      });
    }
  });

export type CartItem = z.infer<typeof CartItemSchema>;
export type Cart = z.infer<typeof CartSchema>;
