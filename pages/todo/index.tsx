import axios from "axios";

export const getServerSideProps = async () => {
    const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
    );

    return {
        props: {
            list: data,
        },
    };
};

const Todo = (props: { list: { title: string } }) => {
    const { list } = props;

    return <div>{list.title}</div>;
};

export default Todo;
