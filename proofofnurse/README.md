# Proof of Nurse
Using decentralised identities to create verifiable credentials for health workers. 

This is a secure platform that enables easy verification of nurse credentials while ensuring privacy, streamlining the process, and ensuring new opportunities.

## Tech Used
Scroll (smart contracts)
SpruceID (decentralised identity)

## Scroll
Smart Contract Deployed to 0x7ae8C5Faa17a1055Afc5Cc0d75C9EC3D077048Bc

## User Flow
The user lands on the home page and clicks the CTA to sign up
User is prompted to complete their profile
User connects to SSX and if successful a profile is created and an NFT in minted.

WIP: We attempted to issue DIDs and VCs using SSX Rebase and faced some challenges. We've opened a PR [here](https://github.com/spruceid/rebase/pull/51) 

## Stack
SSX and SSX Next Auth for secure sign on.
Scroll: Smart Contract Deployed to 0x7ae8C5Faa17a1055Afc5Cc0d75C9EC3D077048Bc

### SSX Rebase Config
We attempted to extended Rebase config. You can review the PR [here](https://github.com/spruceid/rebase/pull/51)  

## Getting Started

Create an env file using the .env-example file

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# zerowork
