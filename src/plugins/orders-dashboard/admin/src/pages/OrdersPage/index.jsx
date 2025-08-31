import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
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
`;

const Td = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #eaeaef;
  color: #32324d;
  max-width: 200px;
  word-wrap: break-word;
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
  font-size: 1.1rem;
`;

const DetailValue = styled.div`
  color: #666687;
  padding: 0.5rem;
  background: #f6f6f9;
  border-radius: 4px;
  word-wrap: break-word;
`;



const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        console.log('Fetching regular orders...');
        const response = await fetch('/api/orders?populate=*', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log('Orders data:', data);
          setOrders(data.data || []);
        } else {
          console.error('Failed to fetch orders:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchOrders();
  }, []);

    const formatOrderDetails = (orderDetails) => {
    if (!orderDetails) return 'N/A';
    try {
      if (typeof orderDetails === 'string') {
        return orderDetails;
      }
      
      // If it's an object, format it nicely
      if (typeof orderDetails === 'object') {
        let formatted = '';
        
        // Handle meal type
        if (orderDetails.mealType) {
          formatted += `Meal Type: ${orderDetails.mealType}\n`;
        }
        
        // Handle quantity
        if (orderDetails.quantity) {
          formatted += `Quantity: ${orderDetails.quantity}\n`;
        }
        
        // Handle order type
        if (orderDetails.orderType) {
          formatted += `Order Type: ${orderDetails.orderType}\n`;
        }
        
        // Handle start date
        if (orderDetails.startDate) {
          formatted += `Start Date: ${orderDetails.startDate}\n`;
        }
        
        // Handle date time
        if (orderDetails.date_time) {
          formatted += `Date/Time: ${orderDetails.date_time}\n`;
        }
        
        // Handle special instructions
        if (orderDetails.specialInstructions) {
          formatted += `Special Instructions: ${orderDetails.specialInstructions}\n`;
        }
        
        // Handle additional equipment
        if (orderDetails.additionalEquipment) {
          formatted += `Additional Equipment: ${orderDetails.additionalEquipment}\n`;
        }
        
        return formatted || 'No details available';
      }
      
      return JSON.stringify(orderDetails, null, 2);
    } catch (error) {
      return 'Invalid JSON';
    }
  };

  const formatPhoneNumber = (phone) => {
    if (!phone) return 'N/A';
    return phone.toString();
  };

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleDeleteOrder = async (orderId) => {
    if (window.confirm('Are you sure you want to delete this order? This action cannot be undone.')) {
      try {
        const response = await fetch(`/api/orders/${orderId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          console.log('Order deleted successfully');
          // Remove the order from the local state
          setOrders(orders.filter(order => order.id !== orderId));
          if (selectedOrder && selectedOrder.id === orderId) {
            setShowModal(false);
            setSelectedOrder(null);
          }
        } else {
          console.error('Failed to delete order:', response.status, response.statusText);
          alert('Failed to delete order. Please try again.');
        }
      } catch (error) {
        console.error('Error deleting order:', error);
        alert('Error deleting order. Please try again.');
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
        <LoadingText>Loading orders...</LoadingText>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Orders Dashboard</Title>
      
      {orders.length > 0 ? (
        <ScrollContainer>
          <Table>
            <thead>
                           <tr>
               <Th>Order ID</Th>
               <Th>Full Name</Th>
               <Th>Email</Th>
               <Th>Phone Number</Th>
               <Th>Address</Th>
               <Th>Total Cost</Th>
               <Th>Order Details</Th>
               <Th>Created At</Th>
               <Th>Updated At</Th>
               <Th>Actions</Th>
             </tr>
            </thead>
            <tbody>
                         {orders.map((order) => (
             <Tr key={order.id}>
               <Td>{order.id}</Td>
               <Td>{order.full_name || 'N/A'}</Td>
               <Td>{order.email || 'N/A'}</Td>
               <Td>{formatPhoneNumber(order.phone_number)}</Td>
               <Td>{order.address || 'N/A'}</Td>
               <Td>{order.total_cost ? `$${order.total_cost}` : 'N/A'}</Td>
               <Td>
                 {order.order_details && Array.isArray(order.order_details) ? (
                   <div>
                     {(() => {
                       const foodCount = order.order_details.filter(item => item.type === 'food').length;
                       const equipmentCount = order.order_details.filter(item => item.type === 'equipment').length;
                       const crockeryCount = order.order_details.filter(item => item.type === 'crockery').length;
                       
                       return (
                         <>
                           {foodCount > 0 && <div><strong>Food:</strong> {foodCount} items</div>}
                           {equipmentCount > 0 && <div><strong>Equipment:</strong> {equipmentCount} items</div>}
                           {crockeryCount > 0 && <div><strong>Crockery:</strong> {crockeryCount} items</div>}
                         </>
                       );
                     })()}
                   </div>
                 ) : order.order_details && typeof order.order_details === 'object' && Array.isArray(order.order_details.data) ? (
                   <div>
                     {(() => {
                       const foodCount = order.order_details.data.filter(item => item.type === 'food').length;
                       const equipmentCount = order.order_details.data.filter(item => item.type === 'equipment').length;
                       const crockeryCount = order.order_details.data.filter(item => item.type === 'crockery').length;
                       
                       return (
                         <>
                           {foodCount > 0 && <div><strong>Food:</strong> {foodCount} items</div>}
                           {equipmentCount > 0 && <div><strong>Equipment:</strong> {equipmentCount} items</div>}
                           {crockeryCount > 0 && <div><strong>Crockery:</strong> {crockeryCount} items</div>}
                         </>
                       );
                     })()}
                   </div>
                 ) : order.order_details && typeof order.order_details === 'object' ? (
                   <div>
                     {order.order_details.mealType && <div><strong>Meal:</strong> {order.order_details.mealType}</div>}
                     {order.order_details.quantity && <div><strong>Qty:</strong> {order.order_details.quantity}</div>}
                     {order.order_details.orderType && <div><strong>Type:</strong> {order.order_details.orderType}</div>}
                     {order.order_details.date_time && <div><strong>Date/Time:</strong> {order.order_details.date_time}</div>}
                     {order.order_details.additionalEquipment && <div><strong>Equipment:</strong> {order.order_details.additionalEquipment}</div>}
                   </div>
                 ) : (
                   formatOrderDetails(order.order_details)
                 )}
               </Td>
               <Td>
                 {order.createdAt 
                   ? new Date(order.createdAt).toLocaleDateString()
                   : 'N/A'
                 }
               </Td>
               <Td>
                 {order.updatedAt 
                   ? new Date(order.updatedAt).toLocaleDateString()
                   : 'N/A'
                 }
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
        <NoDataText>No orders found.</NoDataText>
      )}

      {showModal && selectedOrder && (
        <OrderDetailModal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <Title>Order Details - #{selectedOrder.id}</Title>
            
            <DetailSection>
              <DetailTitle>Customer Information</DetailTitle>
              <DetailValue>
                <strong>Full Name:</strong> {selectedOrder.full_name || 'N/A'}
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
                <strong>Document ID:</strong> {selectedOrder.documentId || 'N/A'}
              </DetailValue>
              <DetailValue>
                <strong>Total Cost:</strong> {selectedOrder.total_cost ? `$${selectedOrder.total_cost}` : 'N/A'}
              </DetailValue>
              <DetailValue>
                <strong>Created At:</strong> {selectedOrder.createdAt 
                  ? new Date(selectedOrder.createdAt).toLocaleString()
                  : 'N/A'
                }
              </DetailValue>
              <DetailValue>
                <strong>Updated At:</strong> {selectedOrder.updatedAt 
                  ? new Date(selectedOrder.updatedAt).toLocaleString()
                  : 'N/A'
                }
              </DetailValue>
              <DetailValue>
                <strong>Published At:</strong> {selectedOrder.publishedAt 
                  ? new Date(selectedOrder.publishedAt).toLocaleString()
                  : 'N/A'
                }
              </DetailValue>
              {selectedOrder.date_time && (
                <DetailValue>
                  <strong>Scheduled Date/Time:</strong> {new Date(selectedOrder.date_time).toLocaleString()}
                </DetailValue>
              )}
            </DetailSection>

                         <DetailSection>
               <DetailTitle>Order Details</DetailTitle>
               <DetailValue style={{ whiteSpace: 'pre-wrap' }}>
                 {formatOrderDetails(selectedOrder.order_details)}
               </DetailValue>
             </DetailSection>

             {selectedOrder.order_details && selectedOrder.order_details.date_time && (
               <DetailSection>
                 <DetailTitle>Scheduled Date/Time</DetailTitle>
                 <DetailValue style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#4945ff' }}>
                   {selectedOrder.order_details.date_time}
                 </DetailValue>
               </DetailSection>
             )}



             <DetailSection>
               <DetailTitle>Food Items</DetailTitle>
               <DetailValue>
                 {(() => {
                   const foodItems = selectedOrder.food_item && selectedOrder.food_item.length > 0 
                     ? selectedOrder.food_item 
                     : selectedOrder.order_details && Array.isArray(selectedOrder.order_details) 
                       ? selectedOrder.order_details.filter(item => item.type === 'food')
                       : selectedOrder.order_details && typeof selectedOrder.order_details === 'object' && Array.isArray(selectedOrder.order_details.data)
                       ? selectedOrder.order_details.data.filter(item => item.type === 'food')
                       : [];
                   
                   return foodItems.length > 0 
                     ? foodItems.map((food, index) => (
                         <div key={index} style={{ marginBottom: '0.5rem', padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px' }}>
                           <strong>{food.name || food.title || 'Food Item'}</strong>
                           {food.quantity && <span style={{ marginLeft: '1rem', color: '#666' }}>Quantity: {food.quantity}</span>}
                           {food.price && <span style={{ marginLeft: '1rem', color: '#28a745' }}>Price: ${food.price}</span>}
                         </div>
                       ))
                     : 'No food items selected';
                 })()}
               </DetailValue>
             </DetailSection>

             <DetailSection>
               <DetailTitle>Additional Equipment</DetailTitle>
               <DetailValue>
                 {(() => {
                   const equipmentItems = selectedOrder.additonal_equipments && selectedOrder.additonal_equipments.length > 0 
                     ? selectedOrder.additonal_equipments 
                     : selectedOrder.order_details && Array.isArray(selectedOrder.order_details) 
                       ? selectedOrder.order_details.filter(item => item.type === 'equipment')
                       : selectedOrder.order_details && typeof selectedOrder.order_details === 'object' && Array.isArray(selectedOrder.order_details.data)
                       ? selectedOrder.order_details.data.filter(item => item.type === 'equipment')
                       : [];
                   
                   return equipmentItems.length > 0 
                     ? equipmentItems.map((equipment, index) => (
                         <div key={index} style={{ marginBottom: '0.5rem', padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px' }}>
                           <strong>{equipment.name || equipment.title || 'Equipment'}</strong>
                           {equipment.quantity && <span style={{ marginLeft: '1rem', color: '#666' }}>Quantity: {equipment.quantity}</span>}
                           {equipment.price && <span style={{ marginLeft: '1rem', color: '#28a745' }}>Price: ${equipment.price}</span>}
                         </div>
                       ))
                     : 'No additional equipment';
                 })()}
               </DetailValue>
             </DetailSection>

             <DetailSection>
               <DetailTitle>Crockery</DetailTitle>
               <DetailValue>
                 {(() => {
                   const crockeryItems = selectedOrder.crockery && selectedOrder.crockery.length > 0 
                     ? selectedOrder.crockery 
                     : selectedOrder.order_details && Array.isArray(selectedOrder.order_details) 
                       ? selectedOrder.order_details.filter(item => item.type === 'crockery')
                       : selectedOrder.order_details && typeof selectedOrder.order_details === 'object' && Array.isArray(selectedOrder.order_details.data)
                       ? selectedOrder.order_details.data.filter(item => item.type === 'crockery')
                       : [];
                   
                   return crockeryItems.length > 0 
                     ? crockeryItems.map((item, index) => (
                         <div key={index} style={{ marginBottom: '0.5rem', padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px' }}>
                           <strong>{item.name || item.title || 'Crockery Item'}</strong>
                           {item.quantity && <span style={{ marginLeft: '1rem', color: '#666' }}>Quantity: {item.quantity}</span>}
                           {item.price && <span style={{ marginLeft: '1rem', color: '#28a745' }}>Price: ${item.price}</span>}
                         </div>
                       ))
                     : 'No crockery items selected';
                 })()}
               </DetailValue>
             </DetailSection>

             {selectedOrder.order_details && selectedOrder.order_details.specialInstructions && (
               <DetailSection>
                 <DetailTitle>Special Instructions</DetailTitle>
                 <DetailValue style={{ padding: '0.5rem', background: '#fff3cd', borderRadius: '4px', border: '1px solid #ffeaa7' }}>
                   {selectedOrder.order_details.specialInstructions}
                 </DetailValue>
               </DetailSection>
             )}

             {selectedOrder.order_details && selectedOrder.order_details.startDate && (
               <DetailSection>
                 <DetailTitle>Start Date</DetailTitle>
                 <DetailValue>
                   {selectedOrder.order_details.startDate}
                 </DetailValue>
               </DetailSection>
             )}

             {selectedOrder.order_details && selectedOrder.order_details.date_time && (
               <DetailSection>
                 <DetailTitle>Scheduled Date/Time</DetailTitle>
                 <DetailValue style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#4945ff' }}>
                   {selectedOrder.order_details.date_time}
                 </DetailValue>
               </DetailSection>
             )}
           </ModalContent>
        </OrderDetailModal>
      )}
    </Container>
  );
};

export default OrdersPage;
