import { z } from 'zod'

import { router, publicProcedure } from '../trpc'

export const userRouter = router({
    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.user.findMany()
    }),
    getUser: publicProcedure
        .input(z.object({ email: z.string() }))
        .query(({ input: { email }, ctx }) => {
            return ctx.prisma.user.findFirst({
                where: { email },
            })
        }),
})
