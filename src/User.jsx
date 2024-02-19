export function User() {

    function NestedUser() {
        return <>Nested Componenet</>
    }

    return <>
        <h1>Hello Users</h1>
        <NestedUser />
    </>
}

// export default User