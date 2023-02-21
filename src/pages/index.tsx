import Head from 'next/head'
import Image from 'next/image'
import { twJoin } from 'tailwind-merge'
import {metadata} from '@/components/data/data'

export default function Home() {
  const {title, description, type, url, image} = metadata

  return (
    <>
      <html lang="en">
      <Head>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        {/** OG */}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        {/** Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
      </Head>
      <body
        className={twJoin(
          "bg-aliceblue",
          "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-primary"
        )}
      >
        <div className="mx-auto flex w-full max-w-full flex-col items-center justify-center">
          
        </div>
      </body>
    </html>
  );
    </>
  )
}
