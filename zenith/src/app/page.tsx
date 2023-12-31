'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Hue from '../ components/Hue/Hue';
import styles from './page.module.css';

export default function Main() {
	const queryClient = new QueryClient();

	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<QueryClientProvider client={queryClient}>
					<Hue />
				</QueryClientProvider>
			</div>
		</main>
	);
}
