The second iteration of my personal portfolio website [oplevan.com](https://www.oplevan.com) built with [Next.js](https://nextjs.org/),
[Sanity](https://www.sanity.io/) and hosted on [Vercel](https://vercel.com/).

## Getting Started

1. Create a [Sanity](https://www.sanity.io/) account.
2. Log into your account, create a new project and set up a dataset.
3. In project root folder create a `.env.local` file and configure your environment variables:

`NEXT_PUBLIC_SANITY_DATASET=<your dataset name>` `NEXT_PUBLIC_SANITY_PROJECT_ID=<your sanity project ID>`

4. Install dependencies

```bash
npm install
```

5. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. Open [http://localhost:3000/studio](http://localhost:3000/studio) and use your Sanity credentials to log into you Studio and start filling your content. You
   can read more about Sanity Studio.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

To learn more about Sanity headless CMS, take a look at the following resources:

- [Getting started with Sanity](https://www.sanity.io/docs/getting-started-with-sanity)
- [Sanity Studio](https://www.sanity.io/docs/sanity-studio)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the
creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
