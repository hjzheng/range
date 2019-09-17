function range(start, end, step) {
  if (arguments.length === 0) {
    throw Error('range function expect at least 1 argument');
  }

  if (arguments.length === 1) {
    end = start;
    start = 0;
    step = 1;
  }

  if (arguments.length === 2) {
    if (end < start) {
      throw Error(
        'range function argument start should be less than argument end, when argument step is positive number'
      );
    }
    step = 1;
  }

  if (arguments.length === 3) {
    if (step === 0) throw Error('range function argument step can not be 0');
    if (step > 0 && end < start) {
      throw Error(
        'range function argument start should be less than argument end, when argument step is positive number'
      );
    }

    if (step < 0 && start < end) {
      throw Error(
        'range function argument start should be great than argument end, when argument step is negative number'
      );
    }
  }

  return Array.from(
    {
      length: Math.abs(Math.ceil((end - start) / step))
    },
    (_, index) => index * step + start
  );
}

module.exports = range;
