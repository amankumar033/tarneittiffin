import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: white;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 0.875rem;
`;

const Th = styled.th`
  background: #f6f6f9;
  padding: 0.75rem;
  text-align: left;
  font-weight: 600;
  color: #32324d;
  border-bottom: 1px solid #eaeaef;
  white-space: nowrap;
`;

const Td = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #eaeaef;
  color: #32324d;
  max-width: 220px;
  word-wrap: break-word;
`;

const Tr = styled.tr`
  transition: background-color 0.2s ease;
  &:hover { background: #f6f6f9; }
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  margin-right: 0.5rem;
`;

const DeleteButton = styled(ActionButton)`
  background: #d02b20;
  color: white;
  &:hover { background: #b02a20; }
`;

const LoadingText = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666687;
`;

const NoDataText = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666687;
`;

const UsersPlansPage = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let initialCount = 0;

    const fetchPlans = async () => {
      try {
        const response = await fetch('/api/users-plans?populate=*', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${window?.strapi?.auth?.getToken?.() || ''}` },
        });
        if (response.ok) {
          const data = await response.json();
          if (!isMounted) return;
          const items = data.data || [];
          setPlans(items);
          if (initialCount === 0) {
            initialCount = items.length;
          } else if (items.length > initialCount) {
            window?.strapi?.notifications?.success?.('New users plan received');
          }
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
    const interval = setInterval(fetchPlans, 10000);
    return () => { isMounted = false; clearInterval(interval); };
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this user plan?')) return;
    try {
      const response = await fetch(`/api/users-plans/${id}`, { method: 'DELETE', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${window?.strapi?.auth?.getToken?.() || ''}` } });
      if (response.ok) {
        setPlans((prev) => prev.filter((p) => p.id !== id));
      } else {
        alert('Failed to delete');
      }
    } catch (e) {
      alert('Error deleting');
    }
  };

  if (loading) {
    return (
      <Container>
        <LoadingText>Loading users plans...</LoadingText>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Users Plans</Title>
      {plans.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <Th>ID</Th>
              <Th>Full Name</Th>
              <Th>Email</Th>
              <Th>Phone Number</Th>
              <Th>Plan</Th>
              <Th>Duration</Th>
              <Th>Price</Th>
              <Th>Plan Status</Th>
              <Th>Additional Queries</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <Tr key={plan.id}>
                <Td>{plan.id}</Td>
                <Td>{plan.full_name || plan.attributes?.full_name || 'N/A'}</Td>
                <Td>{plan.email || plan.attributes?.email || 'N/A'}</Td>
                <Td>{plan.phone_number || plan.attributes?.phone_number || 'N/A'}</Td>
                <Td>{plan.plan || plan.attributes?.plan || 'N/A'}</Td>
                <Td>{plan.duration || plan.attributes?.duration || 'N/A'}</Td>
                <Td>{plan.price || plan.attributes?.price || 'N/A'}</Td>
                <Td>{plan.plan_status || plan.attributes?.plan_status || 'N/A'}</Td>
                <Td>{plan.additional_queries || plan.attributes?.additional_queries || 'N/A'}</Td>
                <Td>{plan.plan_status || plan.attributes?.plan_status || 'N/A'}</Td>
                <Td>
                  <DeleteButton onClick={() => handleDelete(plan.id)}>Delete</DeleteButton>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <NoDataText>No users plans found.</NoDataText>
      )}
    </Container>
  );
};

export default UsersPlansPage;


