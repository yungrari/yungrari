import { Suspense } from "react";

import { Blur } from "@/app/ui/blur";
import { Container } from "@/app/ui/container";
import { Content } from "@/app/ui/content";
import { Footer } from "@/app/ui/footer";
import { Header } from "@/app/ui/header";

import config from "./config";

export default function Home() {
  return (
    <>
      <Blur />
      <Container>
        <Suspense>
          <Header title={config.title} subtitle={config.description} />
        </Suspense>
        <Content content={config.content} />
      </Container>
      <Footer />
    </>
  );
}
