import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import PostsPage from 'pages/PostsPage/PostsPage';
import MyBooksPage from 'pages/MyBooksPage/MyBooksPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import SinglePostPage from 'pages/SinglePostPage/SinglePostPage';
import CommentsPage from './pages/CommentsPage/CommentsPages'
import ProductPage from 'pages/ProductPage/ProductPage';
import ListPage from 'pages/ProductPage/ListPage/ListPage';
import AddPage from 'pages/ProductPage/AddPage/AddPage';
import SearchPage from 'pages/ProductPage/SearchPage/SearchPage';
import SharedLayout from './components/SharedLayout/SharedLayout';

export default function UserRoute() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/posts" element={<PostsPage />} />
                    <Route path="/posts/:id" element={<SinglePostPage />}>
                        <Route path="comments" element={<CommentsPage />} />
                    </Route>
                    <Route path="/my-books" element={<MyBooksPage />} />
                    <Route path="/products" element={<ProductPage />}>
                        <Route path="list" element={<ListPage />} />
                        <Route path="add" element={<AddPage />} />
                        <Route path="search" element={<SearchPage />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />}></Route>
                </Route>
            </Routes>
        </div>
    )
}

