import React, { useState } from 'react';
import { routes as initialRoutes } from "../../mock";
import styles from "./List.module.css";
import Modal from "../../components/modal/Modal";

const List = () => {
    const [isModal, setIsModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [routes, setRoutes] = useState(initialRoutes);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        const sortedRoutes = [...routes].sort((a, b) => {
            let aValue = a[key];
            let bValue = b[key];

            if (key === 'length') {
                aValue = parseFloat(aValue.replace(/[^0-9.]/g, ''));
                bValue = parseFloat(bValue.replace(/[^0-9.]/g, ''));
            }

            if (aValue < bValue) return direction === 'asc' ? -1 : 1;
            if (aValue > bValue) return direction === 'asc' ? 1 : -1;
            return 0;
        });
        setRoutes(sortedRoutes);
        setSortConfig({ key, direction });
    };

    const renderSortIndicator = (key) => (
        <span className={styles.sortIndicator} style={{ visibility: sortConfig.key === key ? 'visible' : 'hidden' }}>
            {sortConfig.key === key ? (sortConfig.direction === 'asc' ? '▲' : '▼') : '▲'}
        </span>
    );

    const handleRowClick = (item) => {
        setSelectedItem(item);
        setIsModal(true);
    };

    const handleDelete = () => {
        if (selectedItem) {
            setRoutes(routes.filter(route => route.id !== selectedItem.id));
            setSelectedItem(null);
            setIsModal(false);
        }
    };

    const totalPages = Math.ceil(routes.length / itemsPerPage);
    const currentRoutes = routes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className={styles.container}>
            <div className={styles.listHeader}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th onClick={() => handleSort('id')}>ID {renderSortIndicator('id')}</th>
                            <th onClick={() => handleSort('name')}>Название {renderSortIndicator('name')}</th>
                            <th onClick={() => handleSort('from')}>Откуда {renderSortIndicator('from')}</th>
                            <th onClick={() => handleSort('to')}>Куда {renderSortIndicator('to')}</th>
                            <th onClick={() => handleSort('length')}>Дистанция {renderSortIndicator('length')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRoutes.map((item, i) => (
                            <tr key={i} onClick={() => handleRowClick(item)} className={styles.clickableRow}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.from || "Не указано"}</td>
                                <td>{item.to || "Не указано"}</td>
                                <td>{item.length}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.pagination}>
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Назад</button>
                <span>Страница {currentPage} из {totalPages}</span>
                <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Вперёд</button>
            </div>
            <Modal setIsModal={setIsModal} isModal={isModal} selectedItem={selectedItem} handleDelete={handleDelete} />
        </div>
    );
};

export default List;
