// YourComponent.tsx
import React from 'react';
import { useQuery, useMutation } from 'react-query';
import ApiService from './';
import { DataItem, FormData } from './types';

class YourComponent extends React.Component {
  render() {
    return (
      <div>
        {/* Fetching data */}
        {this.renderData()}
        
        {/* Mutating data */}
        {this.renderForm()}
      </div>
    );
  }

  renderData() {
    const { data, error, isLoading } = useQuery<DataItem[], Error>('data', ApiService.fetchData);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }

  renderForm() {
    const mutation = useMutation<DataItem, Error, FormData>(ApiService.sendData);

    const handleSubmit = async (formData: FormData) => {
      try {
        const result = await mutation.mutateAsync(formData);
        // Optionally refetch data or update UI
        console.log('Mutation Result:', result);
      } catch (error) {
        // Handle error
        console.error('Mutation Error:', error.message);
      }
    };

    return (
      <form onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        handleSubmit(/* your form data */);
      }}>
        {/* Your form inputs */}
        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? 'Sending...' : 'Send Data'}
        </button>
      </form>
    );
  }
}

export default YourComponent;
