import { css } from "../../styled-system/css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";

export default function Home() {
  return (
    <>
      <div className={css({ fontSize: "8xl", fontWeight: "bold" })}>
        Hello 🐼!
      </div>
      <Card
        cssProps={css.raw({
          maxW: "md",
        })}
      >
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  );
}
