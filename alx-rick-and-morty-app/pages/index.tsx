import { GET_EPISODES } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { EpisodeProps } from "@/interfaces";
import EpisodeCard from "@/components/common/EpisodeCard";
import ErrorBoundary from "@/components/ErrorBoundary";
import ErrorProneComponent from "@/components/ErrorProneComponent";

const Home: React.FC = () => {
  return (
    <ErrorBoundary>
      <ErrorProneComponent />
    </ErrorBoundary>
  );
};

export default Home;
