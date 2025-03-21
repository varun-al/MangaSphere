"use client";
import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import ProfileInfo from "../components/ProfileInfo";
import TabNavigation from "../components/TabNavigation";
import CollectionHeader from "../components/CollectionHeader";
import MangaCardProfile from "../components/MangaCardProfile";

const ProfilePage = () => {
  const collections = {
    currentlyReading: [
      {
        title: "One Piece",
        progress: 85,
        chapter: "1084",
        timeAgo: "2h ago",
      },
      {
        title: "Jujutsu Kaisen",
        progress: 92,
        chapter: "235",
        timeAgo: "1d ago",
      },
      {
        title: "Black Clover",
        progress: 78,
        chapter: "350",
        timeAgo: "3d ago",
      },
    ],
    wantToRead: [
      { title: "Chainsaw Man" },
      { title: "Blue Lock" },
    ],
    completed: [
      { title: "Demon Slayer", progress: 100 },
      { title: "Death Note", progress: 100 },
    ],
  };

  return (
    <div className="flex flex-col bg-neutral-950 min-h-screen">
      <ProfileHeader />
      <div className="flex flex-col px-4 pt-32">
        <ProfileInfo />
        <TabNavigation />

        <div className="flex justify-between items-center mt-6">
          <h2 className="text-xl font-bold leading-8 text-white">
            My Collections
          </h2>
          <button className="flex gap-2 items-center px-4 py-2 bg-indigo-700 rounded">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 3.75V16.25M16.25 10H3.75"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm leading-5 text-white">New Collection</span>
          </button>
        </div>

        <section>
          <CollectionHeader title="Currently Reading" count={collections.currentlyReading.length} />
          <div className="flex gap-6 mt-6 max-sm:flex-col">
            {collections.currentlyReading.map((manga) => (
              <MangaCardProfile
                key={manga.title}
                image={`https://placehold.co/187x280/000000/FFFFFF?text=${manga.title}`}
                title={manga.title}
                progress={manga.progress}
                chapter={manga.chapter}
                timeAgo={manga.timeAgo}
              />
            ))}
          </div>
        </section>

        <section>
          <CollectionHeader title="Want to Read" count={collections.wantToRead.length} />
          <div className="flex gap-6 mt-6 max-sm:flex-col">
            {collections.wantToRead.map((manga) => (
              <MangaCardProfile
                key={manga.title}
                image={`https://placehold.co/187x280/000000/FFFFFF?text=${manga.title}`}
                title={manga.title}
                showProgress={false}
              />
            ))}
          </div>
        </section>

        <section>
          <CollectionHeader title="Completed" count={collections.completed.length} />
          <div className="flex gap-6 pb-12 mt-6 max-sm:flex-col">
            {collections.completed.map((manga) => (
              <MangaCardProfile
                key={manga.title}
                image={`https://placehold.co/187x280/000000/FFFFFF?text=${manga.title}`}
                title={manga.title}
                progress={manga.progress}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;