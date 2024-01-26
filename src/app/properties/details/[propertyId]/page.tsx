export default function PropertyId({ params }: { params: { propertyId: string; }; }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Property Details {params.propertyId}</h1>
    </main>
  );
}
