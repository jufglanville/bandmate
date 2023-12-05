import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession(options);

  // Protected by Middleware so would never reach
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/dashboard");
  }

  console.log(session);

  return (
    <div>
      Dashboard
      <p>ID: {session.user.id}</p>
      <p>NAME: {session.user?.name}</p>
      <p>EMAIL: {session.user?.email}</p>
      <p>IMAGE: {session.user?.image}</p>
      <p>ROLE: {session.user?.role}</p>
    </div>
  );
};

export default Dashboard;
