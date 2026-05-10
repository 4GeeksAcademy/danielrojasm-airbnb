import RoomDetailPage from "@/components/room-detail/room-detail-page";

type RoomPageProps = {
  params: Promise<{ id: string }>;
};

export default async function RoomPage({ params }: RoomPageProps) {
  const { id } = await params;

  return <RoomDetailPage roomId={id} />;
}
