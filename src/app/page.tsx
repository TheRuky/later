import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export default function Home() {
	return (
		<main>
			<div className="flex items-center justify-center h-dvh">
				<div className="text-center">
					<h1 className="text-3xl font-bold text-center">Welcome to Later.</h1>
					<div className="mt-4">
						<SignedOut>
							<SignInButton>
								<Button type="button">Sign in</Button>
							</SignInButton>
						</SignedOut>
						<SignedIn>
							<UserButton />
						</SignedIn>
					</div>
				</div>
			</div>
		</main>
	);
}
