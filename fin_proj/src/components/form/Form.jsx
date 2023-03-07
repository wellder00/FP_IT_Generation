import { useForm } from 'react-hook-form';

function Form() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    if (localStorage.getItem('firstName') === data.firstName) {
      alert(
        `${data.firstName} привіт!!! Не було часу нормально доробити попап.
         Та  щоб ви не засмучувалися ось вам знижка на 120 %))))`,
      );
    } else localStorage.setItem('firstName', data.firstName);
    localStorage.setItem('surName', data.surName);
    localStorage.setItem('email', data.email);
    reset();
  };

  return (
    <div className="form">
      <div className="form__wrapper _container">
        <h2>DON’T FORGET TO SIGN UP</h2>
        <section></section>
        <p>
          Find out early about all upcoming promotions and new product releases with <br /> our
          newsletter.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="form__block-form">
          <div>
            <div className="form__first-form">
              <input
                {...register('firstName', {
                  pattern: /^[A-Z][a-z]+$/,
                  required: 'The field is required',
                })}
                className={!errors?.firstName ? 'form__input' : 'form__input__error'}
                type="text"
              />

              <div className="form__errors">
                {errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}
              </div>
            </div>

            <div className="form__first-form">
              <input
                {...register('surName', {
                  pattern: /^[A-Z][a-z]+$/,
                  required: 'The field is required',
                })}
                className={!errors?.surName ? 'form__input' : 'form__input__error'}
                type="text"
              />
              <div className="form__errors">
                {errors?.surName && <p>{errors?.surName?.message || 'Error!'}</p>}
              </div>
            </div>
          </div>

          <input
            {...register('email', {
              pattern:
                /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/,
              required: 'The field is required',
            })}
            className={errors?.email ? 'form__input_email__error' : 'form__input_email'}
            type="text"
          />
          <div className="form__errors">
            {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
          </div>
          <br />

          <input
            disabled={!isValid}
            className={isValid ? 'form_buttom' : 'form_buttom__disable'}
            type="submit"
            value={'SUBSCRIBE'}
          />
        </form>
      </div>
    </div>
  );
}

export default Form;
