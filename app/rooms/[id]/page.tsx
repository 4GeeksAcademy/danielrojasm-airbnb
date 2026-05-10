import RoomDetailPage from "@/components/room-detail/room-detail-page";

type RoomPageProps = {
  params: Promise<{ id: string }>;
};

const RoomPage = async ({ params }: RoomPageProps) => {
  const { id } = await params;

  return <RoomDetailPage roomId={id} />;
};

export default RoomPage;
