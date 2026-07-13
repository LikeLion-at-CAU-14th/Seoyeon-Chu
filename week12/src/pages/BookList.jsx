import styled from "styled-components";
import React, {useEffect, useState} from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const BookList = () => {
    // books: 책 목록 상태 변수(초기값 빈 배열), setBooks: 책 목록 상태를 업데이트하는 함수
    const [books, setBooks] = useState([]);

    // usenavigate 훅으로 페이지 이동 함수 가져오기
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    }

    // [실습 18] useeffect
    // [실습 17]
    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get(`/databases/books.json`);
            setBooks(response.data);
        }
        fetchBooks();
    }, []);

    return (
        <MenuDom>
            <BookListDom>
                <Title onClick={goHome}>Book List</Title>
                <Title>Book List</Title>
                <ul>
                    {/* [실습 12] books 배열을 map() 함수를 이용하여 화면에 출력하기 */}
                    {books.map((book) => (
                        <Link key={book.id} to={`/books/${book.id}`}>
                            <li>{book.title}</li>
                        </Link>
                    ))}
                </ul>
            </BookListDom>
            <BookDetailDom>
                <Outlet />
            </BookDetailDom>
        </MenuDom>
    );
};
export default BookList;

const BookDetailDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 50px;
  height: 100%;
  border-radius: 0 10px 10px 0;
  margin-top: 100px;
`;

const MenuDom = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 80vh;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const BookListDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: white;
  padding: 50px;
  height: 80%;
  border-radius: 0 10px 10px 0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;