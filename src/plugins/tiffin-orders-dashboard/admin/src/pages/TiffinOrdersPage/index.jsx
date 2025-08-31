import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #32324d;
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
  font-size: 1rem;
`;

const Td = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #eaeaef;
  color: #32324d;
  max-width: 200px;
  word-wrap: break-word;
  font-size: 1rem;
`;

const Tr = styled.tr`
  transition: background-color 0.2s ease;
  
  &:hover {
    background: #f6f6f9;
  }
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
  
  &:hover {
    background: #b02a20;
  }
`;

const ViewButton = styled(ActionButton)`
  background: #4945ff;
  color: white;
  
  &:hover {
    background: #3a36e6;
  }
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

const ScrollContainer = styled.div`
  overflow-x: auto;
  margin-top: 1rem;
`;

const OrderDetailModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  max-width: 1200px;
  width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666687;
  
  &:hover {
    color: #32324d;
  }
`;

const DetailSection = styled.div`
  margin-bottom: 1.5rem;
`;

const DetailTitle = styled.h3`
  color: #32324d;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
`;

const DetailValue = styled.div`
  color: #666687;
  padding: 0.5rem;
  background: #f6f6f9;
  border-radius: 4px;
  word-wrap: break-word;
  font-size: 1.1rem;
`;



const ErrorText = styled.div`
  color: #d02b20;
  padding: 1rem;
  background: #fce8e6;
  border-radius: 4px;
  margin: 1rem 0;
`;

const TiffinOrdersPage = () => {
  const [tiffinOrders, setTiffinOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const fetchTiffinOrders = async () => {
      const newErrors = [];
      
      try {
        console.log('Fetching tiffin orders...');
        const response = await fetch('/api/tiffin-orders?populate=*', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        console.log('Tiffin orders response status:', response.status);
        
                 if (response.ok) {
           const data = await response.json();
           console.log('Tiffin Orders data:', data);
           console.log('First order sample:', data.data?.[0]);
           setTiffinOrders(data.data || []);
         } else {
          console.error('Failed to fetch tiffin orders:', response.status, response.statusText);
          newErrors.push(`Failed to fetch tiffin orders: ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error fetching tiffin orders:', error);
        newErrors.push(`Network error: ${error.message}`);
      } finally {
        setErrors(newErrors);
        setLoading(false);
      }
    };
    
    fetchTiffinOrders();
  }, []);

  const formatPhoneNumber = (phone) => {
    if (!phone) return 'N/A';
    return phone.toString();
  };

  const handleOrderClick = (order) => {
    console.log('Selected tiffin order:', order);
    console.log('Order date field:', order.date);
    console.log('Order additional_note field:', order.additional_note);
    console.log('All order fields:', Object.keys(order));
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleDeleteOrder = async (orderId) => {
    if (window.confirm('Are you sure you want to delete this tiffin order? This action cannot be undone.')) {
      try {
        const response = await fetch(`/api/tiffin-orders/${orderId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          console.log('Tiffin order deleted successfully');
          // Remove the order from the local state
          setTiffinOrders(tiffinOrders.filter(order => order.id !== orderId));
          if (selectedOrder && selectedOrder.id === orderId) {
            setShowModal(false);
            setSelectedOrder(null);
          }
        } else {
          console.error('Failed to delete tiffin order:', response.status, response.statusText);
          alert('Failed to delete tiffin order. Please try again.');
        }
      } catch (error) {
        console.error('Error deleting tiffin order:', error);
        alert('Error deleting tiffin order. Please try again.');
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  if (loading) {
    return (
      <Container>
        <LoadingText>Loading tiffin orders...</LoadingText>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Tiffin Orders Dashboard</Title>
      
      {errors.length > 0 && (
        <div>
          {errors.map((error, index) => (
            <ErrorText key={index}>{error}</ErrorText>
          ))}
        </div>
      )}
      
      {tiffinOrders.length > 0 ? (
        <ScrollContainer>
          <Table>
            <thead>
                             <tr>
                 <Th>Order ID</Th>
                 <Th>Full Name</Th>
                 <Th>Email</Th>
                 <Th>Phone Number</Th>
                 <Th>Address</Th>
                 <Th>Meal Type</Th>
                 <Th>Scheduled Date/Time</Th>
                 <Th>Additional Notes</Th>
                 <Th>Actions</Th>
               </tr>
            </thead>
            <tbody>
                             {tiffinOrders.map((order) => (
                 <Tr key={order.id}>
                   <Td>{order.id}</Td>
                   <Td>{order.fullname || 'N/A'}</Td>
                   <Td>{order.email || 'N/A'}</Td>
                   <Td>{formatPhoneNumber(order.phone_number)}</Td>
                   <Td>{order.address || 'N/A'}</Td>
                   <Td>{order.meal_type || 'N/A'}</Td>
                   <Td>
                     {order.date 
                       ? new Date(order.date).toLocaleString()
                       : order.attributes?.date 
                       ? new Date(order.attributes.date).toLocaleString()
                       : 'N/A'
                     }
                   </Td>
                   <Td>
                     {order.additional_note || order.attributes?.additional_note || 'N/A'}
                   </Td>
                   <Td>
                     <ViewButton onClick={() => handleOrderClick(order)}>
                       View
                     </ViewButton>
                     <DeleteButton onClick={() => handleDeleteOrder(order.id)}>
                       Delete
                     </DeleteButton>
                   </Td>
                 </Tr>
               ))}
            </tbody>
          </Table>
        </ScrollContainer>
      ) : (
        <NoDataText>No tiffin orders found.</NoDataText>
      )}

      {showModal && selectedOrder && (
        <OrderDetailModal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <Title>Tiffin Order Details - #{selectedOrder.id}</Title>
            
            <DetailSection>
              <DetailTitle>Customer Information</DetailTitle>
              <DetailValue>
                <strong>Full Name:</strong> {selectedOrder.fullname || 'N/A'}
              </DetailValue>
              <DetailValue>
                <strong>Email:</strong> {selectedOrder.email || 'N/A'}
              </DetailValue>
              <DetailValue>
                <strong>Phone Number:</strong> {formatPhoneNumber(selectedOrder.phone_number)}
              </DetailValue>
              <DetailValue>
                <strong>Address:</strong> {selectedOrder.address || 'N/A'}
              </DetailValue>
            </DetailSection>

            <DetailSection>
              <DetailTitle>Order Information</DetailTitle>
                             <DetailValue>
                 <strong>Order ID:</strong> {selectedOrder.id}
               </DetailValue>
               <DetailValue>
                 <strong>Meal Type:</strong> {selectedOrder.meal_type || 'N/A'}
               </DetailValue>
               <DetailValue>
                 <strong>Scheduled Date/Time:</strong> {selectedOrder.date 
                   ? new Date(selectedOrder.date).toLocaleString()
                   : selectedOrder.attributes?.date 
                   ? new Date(selectedOrder.attributes.date).toLocaleString()
                   : 'N/A'
                 }
               </DetailValue>
               <DetailValue>
                 <strong>Additional Notes:</strong> {selectedOrder.additional_note || selectedOrder.attributes?.additional_note || 'N/A'}
               </DetailValue>
               <DetailValue>
                 <strong>Created At:</strong> {selectedOrder.createdAt 
                   ? new Date(selectedOrder.createdAt).toLocaleString()
                   : 'N/A'
                 }
               </DetailValue>
               <DetailValue>
                 <strong>Published At:</strong> {selectedOrder.publishedAt 
                   ? new Date(selectedOrder.publishedAt).toLocaleString()
                   : 'N/A'
                 }
               </DetailValue>
                         </DetailSection>
           </ModalContent>
        </OrderDetailModal>
      )}
    </Container>
  );
};

export default TiffinOrdersPage;
