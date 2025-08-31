import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #32324d;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  background: #f6f6f9;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #32324d;
  font-size: 1.1rem;
  border-bottom: 1px solid #e9ecef;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
  font-size: 1rem;
  color: #32324d;
`;

const Tr = styled.tr`
  &:hover {
    background-color: #f8f9fa;
    cursor: pointer;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 800px;
  width: 90%;
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
  color: #666;
  &:hover {
    color: #333;
  }
`;

const DetailSection = styled.div`
  margin-bottom: 2rem;
`;

const DetailTitle = styled.h3`
  font-size: 1.5rem;
  color: #32324d;
  margin-bottom: 1rem;
  font-weight: 600;
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 0.5rem;
`;

const DetailValue = styled.div`
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #32324d;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s;
`;

const ViewButton = styled(ActionButton)`
  background: #007bff;
  color: white;
  &:hover {
    background: #0056b3;
  }
`;

const DeleteButton = styled(ActionButton)`
  background: #dc3545;
  color: white;
  &:hover {
    background: #c82333;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
`;

const ErrorMessage = styled.div`
  background: #f8d7da;
  color: #721c24;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  border: 1px solid #f5c6cb;
`;

const EnquiryPage = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/enquiries?populate=*');
      if (!response.ok) {
        throw new Error('Failed to fetch enquiries');
      }
      const data = await response.json();
      console.log('Fetched enquiries data:', data);
      setEnquiries(data.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEnquiryClick = (enquiry) => {
    console.log('Selected Enquiry:', enquiry);
    console.log('All Enquiry Keys:', Object.keys(enquiry));
    console.log('Enquiry Attributes:', enquiry.attributes);
    setSelectedEnquiry(enquiry);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEnquiry(null);
  };

  const handleDeleteEnquiry = async (enquiryId) => {
    if (window.confirm('Are you sure you want to delete this enquiry?')) {
      try {
        const response = await fetch(`/api/enquiries/${enquiryId}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          setEnquiries(enquiries.filter(enquiry => enquiry.id !== enquiryId));
          if (selectedEnquiry && selectedEnquiry.id === enquiryId) {
            closeModal();
          }
        } else {
          alert('Failed to delete enquiry');
        }
      } catch (err) {
        alert('Error deleting enquiry: ' + err.message);
      }
    }
  };

  if (loading) {
    return (
      <Container>
        <LoadingMessage>Loading enquiries...</LoadingMessage>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage>Error: {error}</ErrorMessage>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Enquiry Dashboard</Title>
      
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone Number</Th>
            <Th>Service Interest</Th>
            <Th>Message</Th>
            <Th>Created At</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enquiry) => {
            const enquiryData = enquiry.attributes || enquiry;
            return (
              <Tr key={enquiry.id}>
                <Td>{enquiryData.name || 'N/A'}</Td>
                <Td>{enquiryData.email || 'N/A'}</Td>
                <Td>{enquiryData.phone_number || 'N/A'}</Td>
                <Td>{enquiryData.service_interest || 'N/A'}</Td>
                <Td>
                  {enquiryData.message 
                    ? (enquiryData.message.length > 50 
                        ? enquiryData.message.substring(0, 50) + '...' 
                        : enquiryData.message)
                    : 'N/A'
                  }
                </Td>
                <Td>
                  {enquiryData.createdAt 
                    ? new Date(enquiryData.createdAt).toLocaleDateString()
                    : 'N/A'
                  }
                </Td>
                <Td>
                  <ViewButton onClick={() => handleEnquiryClick(enquiry)}>
                    View
                  </ViewButton>
                  <DeleteButton onClick={() => handleDeleteEnquiry(enquiry.id)}>
                    Delete
                  </DeleteButton>
                </Td>
              </Tr>
            );
          })}
        </tbody>
      </Table>

      {showModal && selectedEnquiry && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            
            <DetailSection>
              <DetailTitle>Enquiry Information</DetailTitle>
              
              <DetailValue>
                <strong>Enquiry ID:</strong> {selectedEnquiry.id}
              </DetailValue>
              <DetailValue>
                <strong>Name:</strong> {selectedEnquiry.attributes?.name || selectedEnquiry.name || 'N/A'}
              </DetailValue>
              <DetailValue>
                <strong>Email:</strong> {selectedEnquiry.attributes?.email || selectedEnquiry.email || 'N/A'}
              </DetailValue>
              <DetailValue>
                <strong>Phone Number:</strong> {selectedEnquiry.attributes?.phone_number || selectedEnquiry.phone_number || 'N/A'}
              </DetailValue>
              <DetailValue>
                <strong>Service Interest:</strong> {selectedEnquiry.attributes?.service_interest || selectedEnquiry.service_interest || 'N/A'}
              </DetailValue>
              <DetailValue>
                <strong>Message:</strong> {selectedEnquiry.attributes?.message || selectedEnquiry.message || 'N/A'}
              </DetailValue>
              <DetailValue>
                <strong>Created At:</strong> {(selectedEnquiry.attributes?.createdAt || selectedEnquiry.createdAt) 
                  ? new Date(selectedEnquiry.attributes?.createdAt || selectedEnquiry.createdAt).toLocaleString()
                  : 'N/A'
                }
              </DetailValue>
              <DetailValue>
                <strong>Updated At:</strong> {(selectedEnquiry.attributes?.updatedAt || selectedEnquiry.updatedAt) 
                  ? new Date(selectedEnquiry.attributes?.updatedAt || selectedEnquiry.updatedAt).toLocaleString()
                  : 'N/A'
                }
              </DetailValue>
              <DetailValue>
                <strong>Published At:</strong> {(selectedEnquiry.attributes?.publishedAt || selectedEnquiry.publishedAt) 
                  ? new Date(selectedEnquiry.attributes?.publishedAt || selectedEnquiry.publishedAt).toLocaleString()
                  : 'N/A'
                }
              </DetailValue>
            </DetailSection>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default EnquiryPage;
