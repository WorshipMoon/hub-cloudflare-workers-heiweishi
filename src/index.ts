/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import { createClient } from '@supabase/supabase-js';
export default {
	// async fetch(request, env) {
	// 	const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_KEY);
	// 	const { data, error } = await supabase.from('countries').select('*');
	// 	if (error) throw error;
	// 	return new Response(JSON.stringify(data), {
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 	});
	// },
	async fetch(request, env, ctx): Promise<Response> {
		// console.log('request', request);
		console.log('env', env);

		// const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_KEY);
		// const { data, error } = await supabase.from('vpn_link').select('*');
		// if (error) throw error;
		// return new Response(JSON.stringify(data), {
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// });
		let { pathname } = new URL(request.url);
		switch (pathname) {
			case '/hello':
				return new Response('Hello World!');
			case '/about':
				return new Response('About Page');
			case '/contact':
				return new Response('Contact Page');
			default:
				// 默认路由
				return new Response('Home', { status: 200 });

				return new Response('Not Found', { status: 404 });
		}

		// return new Response('Hello World!');
	},
	async scheduled(controller: ScheduledController, env: Env, ctx: ExecutionContext) {
		console.log('cron processed');
	},
} satisfies ExportedHandler<Env>;
