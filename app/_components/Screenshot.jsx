function Screenshot({ onModalOpen, src, className }) {
  return (
    <img
      src={src}
      onClick={() =>
        onModalOpen({
          type: 'screenshot',
          src: src,
        })
      }
      className={`cursor-pointer ${className}`}
    />
  );
}

export default Screenshot;
