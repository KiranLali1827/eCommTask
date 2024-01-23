const paginate = (PassProducts) => {
    const itemsPerPage = 6;
    const pages = Math.ceil(PassProducts.length / itemsPerPage);
  
    const ListofProducts = Array.from({ length: pages }, (_, index) => {
      const start = index * itemsPerPage;
      return PassProducts.slice(start, start + itemsPerPage);
    });
    return ListofProducts;
  };
  
  export default paginate;
  