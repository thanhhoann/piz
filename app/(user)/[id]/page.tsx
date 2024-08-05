export default function UserPage({
	params,
}: { params: { id: string } }) {
	return <>{params.id}</>
}
