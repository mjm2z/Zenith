'use client';

import { useMutation } from '@tanstack/react-query';
import { routes } from '../../../config/utils';

export default function Hue() {
	// const handleClick = () => {
	const connectHue = useMutation({
		mutationFn: async (params) => {
			const response = await fetch(routes.baseApi, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ devicetype: 'hue#mac_vs_code_mike' }),
			});
			return await response.json();
		},
		onSuccess: (res, data, test) => {
			console.log('success..', res);
			// console.log(res.json());
		},
		onSettled: (set) => {
			console.log('settled', set);
		},
		onError: (err) => {
			console.log('error?', err);
		},
	});

	const mutate = () => mutation.mutate();

	return (
		<p>
			Click this button&nbsp;<button onClick={() => mutate()}>(This One)</button>
		</p>
	);
}
