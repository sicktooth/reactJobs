const jobLoader = async ({params}) => {
        const res = await fetch(`/api/jobs/${params.id}`);
        const data = res.json();
        return data;
    }

export default jobLoader