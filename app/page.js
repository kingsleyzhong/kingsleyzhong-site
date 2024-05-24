import Image from "next/image";
import Link from "next/link";

const NavLink = ({ href, children }) => {
  return (
    <Link
      rel="noopener noreferrer"
      target="_blank"
      href={href}
      className="text-blue-600 hover:underline focus:underline"
    >
      {children}
    </Link>
  );
};

export default function Home() {
  return (
    <main className="">
      <section>
        <div className="flex flex-col gap-1">
          <p>
            Hi I'm Kingsley. Currently building{" "}
            <NavLink href="https://hypacia.com" target="_blank">
              Hypacia
            </NavLink>{" "}
            full time. Born and raised in Calgary, Canada; trying to move to SF
            :) DMs are always open.
          </p>
          <p>
            I love technology, building things, lifting heavy and mountains.{" "}
            <NavLink href="https://www.instagram.com/chingsley.lifts/">
              83kg Junior Powerlifter
            </NavLink>
            . Calgary weekends = hiking / skiing in the Rockies (if I can).
          </p>
        </div>
        <div className="py-4">
          <h3 className="text-xl font-semibold">Socials:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>
              Email:{" "}
              <Link
                href="mailto:kingsley.zhong@gmail.com"
                className="underline"
              >
                kingsley.zhong@gmail.com
              </Link>
            </li>
            <li>
              Twitter/X:{" "}
              <Link
                href="https://twitter.com/zhong_kingsley"
                className="underline"
              >
                @zhong_kingsley
              </Link>
            </li>
            <li>
              Instagram:{" "}
              <Link
                href="https://www.instagram.com/kingsley.zhong/"
                className="underline"
              >
                @kingsley.zhong
              </Link>
            </li>
            <li>
              Linkedin:{" "}
              <Link
                href="https://www.linkedin.com/in/kingsley-zhong/"
                className="underline"
              >
                @kingsley-zhong
              </Link>
            </li>
            <li>
              Github:{" "}
              <Link
                href="https://github.com/kingsleyzhong"
                className="underline"
              >
                @kingsleyzhong
              </Link>
            </li>
          </ul>
        </div>
        <div className="py-4">
          <h3 className="text-xl font-semibold">Formerly (mostly failures):</h3>
          <ul className="list-disc list-inside ml-2">
            <li>
              Data Engineer @ Libin Cardiovasular Institute{" "}
              <NavLink href="https://cumming.ucalgary.ca/news/summer-students-contribute-precision-medicine-infrastructure-lasting-impact">
                (Article)
              </NavLink>
            </li>
            <li>
              Web Dev @{" "}
              <NavLink href="https://2022.igem.wiki/mcgill">
                McGill IGEM (2022)
              </NavLink>
            </li>
            <li>CIO @ Threat Level Gaming</li>
            <li>
              Co-Founder @ uPrep Academy (who knew that trying to upsell in a
              saturated market would be so hard)
            </li>
            <li>CS @ UCalgary (2022 - 2024, dropped out)</li>
            <li>
              High School @ Western Canada High School (if ur in high school
              reading this, take IB, it's worth it don't let other people say
              otherwise)
            </li>
          </ul>
        </div>
        <div className="py-4">
          <h3 className="text-xl font-semibold">Stuff I've done:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>
              <span className="font-semibold">Hackathons:</span>{" "}
              <span className="italic">
                (as a fun change from competitive programming)
              </span>
              <ul className="ml-12 list-[square]">
                <li>
                  HackMIT 2023 -{" "}
                  <NavLink href="https://devpost.com/software/fluxus-a4bgv1">
                    Fluxus : Natural Language-Managed Medical Data Workspace.
                  </NavLink>{" "}
                  (Health & Accessibility Track Winner & 1st Place Intersystems
                  Sponsor Prize)
                </li>
                <li>
                  TreeHacks 2024 -{" "}
                  <NavLink href="https://devpost.com/software/ai-thena">
                    mentis.ai : AI-powered tutor designed to be accessible,
                    interactive and audiovisual.
                  </NavLink>{" "}
                  (Best Use of Monster Generative AI APIs)
                </li>
                <li>
                  PennApps XXIV (2023) -{" "}
                  <NavLink href="https://devpost.com/software/ai-thena">
                    ResearchRadar.ai : AI-powered research paper recommender.,
                    interactive and audiovisual.
                  </NavLink>{" "}
                  (Best Design Hack)
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Competitive Programming:</span>{" "}
              <span className="italic">
                (found it much more enjoyable than competitive math)
              </span>
              <ul className="ml-12 list-[square]">
                <li>
                  ICPC (International Collegiate Programming Contest) 2022-23:
                  3rd in Rocky Mountain Region, 1st in Western Canada, 49th at
                  North American Championships
                </li>
                <li>
                  ACPC (Alberta Collegiate Programming Contest) 2020: D2 2nd,
                  2021: D2 1st, 2022: D1 3rd, 2023: D1 3rd
                </li>
                <li>
                  CCC (Canadian Computing Competition) 2021: Senior 60/75 (#40),
                  2022: Senior 42/75 (choke)
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Competitive Math:</span>
              <ul className="ml-12 list-[square]">
                <li>
                  AIME (American Invitational Mathematics Examination) 2021:
                  8/15 (#602), 2022: never got results :)
                </li>
                <li>
                  CEMC CSMC (Canadian Senior Mathematics Contest) 2021: 48/60
                  (#177)
                </li>
                <li>
                  CEMC Euclid: 2021: 88/100 (#296), 2022: also never got results
                  LOL
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="py-4">
          <h3 className="text-xl font-semibold">Essays:</h3>
          Someone remind me to publish my Notion drafts...
          {/* <ul className="list-disc list-inside ml-2">
            <li>
              Competitive Programmer (Team UCalgary ICPC 2022-23, #3rd in Rocky
              Mountain Region, #1st in Western Canada) ()
            </li>
          </ul> */}
        </div>
      </section>
    </main>
  );
}
