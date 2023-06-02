import { z } from 'zod';
import { superValidate, message } from 'sveltekit-superforms/server';
import { error, fail } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma.js';

const schema = z.object({
	name: z.string().optional(),
	email: z.string().email()
});

	/** @type {import('@sveltejs/kit').Load} */
export const load = async () => {
	// Server API:
	const form = await superValidate(schema);

	// Always return { form } in load and form actions.
	return { form };
};

export const actions = {
	/**
	 * @type {import('@sveltejs/kit').RequestHandler}
	 */
	default: async ({ request }) => {
		const form = await superValidate(request, schema);
		console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { form });
		}
		try {
			await prisma.waitinglist.create({
				data: {
					email: form.data.email
				}
			});
			return message(form, 'We will email you soon!');
		} catch (e) {
			console.log(e);
			return message(form, 'Could not create waitinglist entry. Email already submitted?', {
				status: 403
			});
		}
		// TODO: Do something with the validated data

		// Yep, return { form } here too
		return { form };
	}
};
