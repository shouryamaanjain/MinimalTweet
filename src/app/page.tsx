import { TweetCard } from "@/components/tweet-card"
import { Skeleton } from "@/components/ui/skeleton"
import React from "react"
import { getTweet } from "react-tweet/api"

export default function Page() {
  const tweets = [
    "1802617705603965135",
    "1791162239375847751",
    "1816473497167913130",
    "1815431484767142272",
    "1806408640431288664",
    "1811460497738465309",
    "1800658421353713669",
    "1815975207007576343",
    "1811449409206415681",
    "1780667913386782877",
    "1816146624038723767",
    "1812885890382929956",
    "1816551657158877187",
    "1812723542816878756",
    "1816749017965166960",
    "1817893003186618525",
    "1815802865237254527",
    "1811260876697358554",
    "1812956468137902295",
    "1798892187545149521",
    "1777603210363928878",
    "1810992554797846641",
    "1812834653000323554",
    "1817422458540155334",
    "1784604919699505283",
    "1816914956471947384",
    "1795117004657131963",
    "1816699989369979290",
    "1777457518844801121",
    "1809352140147900447",
    "1816536290822881780",
    "1741534215253237859",
    "1815437149472518424",
    "1779963510946144268",
    "1811717308571877753",
    "1815800336642367590",
    "1809089840174281156",
    "1810714237146214785",
    "1809352140147900447",
    "1792961048632500285",
    "1806408640431288664",
    "1788602265399390409",
    "1811460497738465309",
    "1699097578548363266"
  ]

  const tweetPromises = tweets.map((id) => getTweet(id))

  return (
    <>
      <section className="p-2.5 pt-10 sm:container sm:max-w-screen-lg flex items-center justify-center">
        <div className="list-none space-y-2 py-8 sm:block sm:columns-2 sm:gap-2 lg:columns-3 pb-28">
          {tweetPromises.map((promise, idx) => (
            <React.Suspense
              key={idx}
              fallback={<Skeleton className="size-[1000px]" />}
            >
              <TweetCard tweetPromise={promise} />
            </React.Suspense>
          ))}
        </div>
      </section>
      <div
        className="pointer-events-none fixed bottom-0 left-0 h-24 w-full bg-red-50"
        style={{
          background: "linear-gradient(to bottom,transparent, #fff 10%)",
          maskImage: "linear-gradient(to top, #fff 30%,transparent)",
          backdropFilter: "blur(1px)",
        }}
      />
    </>
  )
}
